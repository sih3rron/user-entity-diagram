import styles from './Form.module.css';
import { Graph } from '../functions/AdjacencyList';

const Form = () => {
  let data = "";

  const CSVToArray = (data, delimiter = ',', omitFirstRow = false) => data
    .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
    .split('\n')
    .map(c => c.split(delimiter));

  async function csvToString(e) {
    e.preventDefault();
    const file = document.getElementById("formFile");
    const reader = new FileReader();

    reader.onload = e => {

      const data = e.target.result;

      //Initial Data Array
      const CSVArray = CSVToArray(data, '\t', true);
      const keys = CSVArray.map(d => d[1]);

      //Unique Entity Names as Keys
      const uniqueKeys = [...new Set(keys)];
      const entityData = [];

      //Loop to add each array into another structure by Unique Entity Name
      for (let i = 0; i < uniqueKeys.length; i++) {
        let uniqueEntity = CSVArray.filter((item) => item[1] === uniqueKeys[i]);
        entityData.push(uniqueEntity);
      }

      // Foundation Code

      const orgData = [["Buenos Aires", "A1", ["C3", "D4"]],["Santa fe", "B2",["C3"]],["Córdoba", "C3",[]],["Mendoza", "D4",[]]]

      const EntityDiagram = new Graph();
      const shapes = [];
      
      for(let i = 0; i<orgData.length; i++){
        EntityDiagram.addNode(orgData[i][1], orgData[i][0], shapes);
      }

      Promise.all(shapes).then( values =>  { 
        console.log(values)

        const fullData = []

        orgData.map((org) => {
          for(let k = 0; k<values.length; k++){
            if(org[1] === values[k][1]){fullData.push([values[k][0], ...org])}
          }
        }) 

        for(let l = 0; l<fullData.length; l++){
              fullData[l][3].forEach( (item, idx, arr) => {
               let secShape = values.filter( val => { if(val[1] === arr[idx]) return val[0]});

                console.log(`Node 1: ${fullData[l][2]} | `, `Shape 1: ${fullData[l][0]} | `, `Node 2: ${arr[idx]} | `, `Shape 2: ${secShape[0][0]}  `)

                EntityDiagram.addConnection(fullData[l][2],  fullData[l][0], arr[idx], secShape[0][0])
                
              });
          }
        }

      ); 
      
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