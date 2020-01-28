import React from 'react';
import useInputState from '../hooks/useInputState';

export default function RecipeForm(props){
    const [title, titleHandleChange] = useInputState(props.title);
    const [ings, ingsHandleChange] = useInputState(props.ings);
    const [inputTags, tagsHandleChange] = useInputState(props.inputTags);
    const [time_minutes, timeHandleChange] = useInputState(props.time);
    const [price, priceHandleChange] = useInputState(props.price);
    
    const fields = [
      {'label': 'Title', 'value': title, 'onChange': titleHandleChange},
      {'label': 'Ingredients', 'value': ings, 'onChange': ingsHandleChange},
      {'label': 'Tags', 'value': inputTags, 'onChange': tagsHandleChange},
      {'label': 'Time', 'value': time_minutes, 'onChange': timeHandleChange},
      {'label': 'Price', 'value': price, 'onChange': priceHandleChange},
    ]

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {title, ings, inputTags, time_minutes, price};
        if (props.processData) props.processData(data);
    };

    return (
      <form onSubmit={handleSubmit} >
        <div style={{display:'flex', alignContent:'center', flexDirection:'column'}}>
          <table><tbody>
            {fields.map(
              field => {
                return (
                  <tr key={field["label"]}>
                    <td> {field["label"]}</td>
                    <td><input {...field} /></td>
                  </tr>
                );
              }
            )}
          </tbody></table>
          <button>{props.button_text || "add recipe"}</button>
        </div>
      </form>
    );
}
