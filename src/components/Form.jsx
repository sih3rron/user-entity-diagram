import styles from './Form.module.css';
import { Graph } from '../functions/AdjacencyList';
import { CSVToArray } from '../functions/CSVToArray';
import { orderByLength } from '../functions/orderByLength';
import { elkResults } from '../functions/ELKData';

const Form = () => {

  async function csvToString(e) {

    e.preventDefault();
    const file = document.getElementById("formFile");
    const reader = new FileReader();

    reader.onload = e => {

      //Assign CSV event results to variable
      const data = e.target.result;

      //Initial Data Array
      const EntityData = CSVToArray(data, '\t', true);
      const uniqueKeys = {};

      // Filter the original array to get only unique keys and data
      const newArray = EntityData.filter(item => {
        // Check if the key is already in the uniqueKeys object
        if (!uniqueKeys[item[1]]) {
          // If not, add it to the uniqueKeys object and include the item in the new array
          uniqueKeys[item[1]] = true;
          return true;
        }
        // If the key is already in uniqueKeys, skip this item (it's a duplicate)
        return false;
      });

      const arrTrim = [];
      const shapes = [];
      const EntityDiagram = new Graph();
      newArray.forEach(entity => arrTrim.push([entity.slice(0, -3)]));
      let flattenData = [];

      

      arrTrim.forEach(row => {
        const key = row[0][1];
        row[0].push([])
        row[0].push([])

        //Add a Shape to the board
        EntityDiagram.addNode(row[0][0], row[0][1], shapes);

        for (let d in EntityData) {
          if (key === EntityData[d][1]) {
            if (EntityData[d].slice(2, -2) !== '') {
              row[0][2].push(EntityData[d].slice(2, -2))
            }
          }

        }

        arrTrim.forEach(elem => {
          if (elem[0][2] !== undefined) {
            if (elem[0][2][elem[0][2].length - 1] == '') { elem[0][2].pop() }
          }
        })

      })

      arrTrim.forEach(row => flattenData.push(row.flat(Infinity)));

      //Shape IDs are all held as Promises within the "Shapes" Array.
      Promise.all(shapes).then(values => {

        let entityObject = [];

        flattenData.map((org) => {
          for (let k = 0; k < values.length; k++) {
            if (org[1] === values[k][1]) {
              org.splice(0, 0, values[k][0]);
            }
          }
        });

        flattenData.sort(orderByLength);

        flattenData.forEach(elem => {
          entityObject.push({
            "sapID": `${elem[2]}`,
            "org": `${elem[1]}`,
            "shapeID": `${elem[0]}`,
            "children": elem.length > 3 ? [elem.slice(3, elem.length)] : [],
            "childShape": [],
          });
        })

        entityObject.forEach(elem => {
          elem.children.forEach((children) => {
            children.filter((child) => {
              for (let v in values) {
                if (child === values[v][1]) {
                  elem.childShape.push(values[v][0])
                }
              }
            })
          })
        })

        for (let w = 0; w < entityObject.length - 1; w++) {
          if (entityObject[w].children.length > 0) {
            for (let x = 0; x < entityObject[w].children[0].length; x++) {
              EntityDiagram.addConnection(entityObject[w].sapID, entityObject[w].shapeID, entityObject[w].children[0][x], entityObject[w].childShape[x], EntityData);
            }
          }
        }

        const elkChildren = [];
        
        values.forEach(child => elkChildren.push({ id: child[1], width: 100, height: 50 }))

        const elkEdges = [];

        EntityData.forEach((entry, idx) => {
          if (entry[2] !== '') {
            elkEdges.push({ id: idx, sources: [entry[1]], targets: [entry[2]] })
          }
        });


        const graph = {
          id: "root",
          layoutOptions: {
            "elk.algorithm": "mrtree",
            "elk.spacing.nodeNode": 30,
          },
          children: elkChildren,
          edges: elkEdges,
        };

        elkResults(graph, values).then(() => {
          const allTheThings = values.filter(val => { 
            miro.board.select({ id: val[0]} ) 
          })
        }).then(miro.board.viewport.zoomTo({ id: values[0][values.length/2] }));
       
      });
    };

    reader.readAsText(file.files[0]);
  }

  return (
    <>
      <form className={`cs1 ce12 ${styles.formContent}`} id="DataUpload" onSubmit={e => csvToString(e)} >

        <div className="form-group">
          <input type="file" id="formFile" accept=".csv, .tsv" />
        </div>
        <button type="submit" className="cs1 ce12 button button-primary" >
          Submit
        </button>

      </form>


    </>
  );
}

export default Form;