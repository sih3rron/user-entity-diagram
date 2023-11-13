import styles from './Form.module.css';
import { Graph } from '../functions/AdjacencyList';
import { CSVToArray } from '../functions/CSVToArray';

const Form = () => {

  async function csvToString(e) {
    e.preventDefault();
    const file = document.getElementById("formFile");
    const reader = new FileReader();

    reader.onload = e => {

      //Assign CSV event results to data variable
      const data = e.target.result;

      //Initial Data Array
      const orgData = CSVToArray(data, '\t', true);
      const EntityDiagram = new Graph();

      //Array for Shape ID assignments
      const shapes = [];
      //Loop over the entity data to create nodes/Miro shapes. Assign ShapeIDs for Connector references
      for (let i = 0; i < orgData.length; i++) {
        EntityDiagram.addNode(orgData[i][1], orgData[i][0], shapes, i, orgData.length, orgData[i][5]);
      }

      //Shapes array contains full promise values.
      Promise.all(shapes).then(values => {
        //console.log("Shapes Data: ", values)

        const fullData = [];

        orgData.map((org) => {
          for (let k = 0; k < values.length; k++) {
            if (org[1] === values[k][1]) { fullData.push([values[k][0], ...org]) }
          }
        })

        //console.log("Full data: ", fullData)

        for (let l = 0; l < fullData.length; l++) {
          if (fullData[l][3].length > 0) {
            let secShape = values.filter(val => { if (val[1] === fullData[l][3]) return fullData[l].splice(fullData[l].length, 0, val[0]) });
            EntityDiagram.addConnection(fullData[l][2], fullData[l][0], fullData[l][3], fullData[l][7], fullData[l][5], fullData[l][5])
            //console.log(`Node 1: ${fullData[l][2]} | `, `Shape 1: ${fullData[l][0]} | `, `Node 2: ${fullData[l][3]} | `, `Shape 2: ${fullData[l][7]} | `, `Transaction: ${fullData[l][5]} | `  , `Transaction Count: ${fullData[l][6]} ` )
          }
        }

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