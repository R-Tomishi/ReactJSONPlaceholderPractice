import "./styles.css";
import axios from "axios";

const onClickUsers = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => console.log(err));
};

const onClickUser1 = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/users/1")
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => console.log(err));
};

export default function App() {
  return (
    <div className="App">
      <button onClick={onClickUsers}>Users</button>
      <button onClick={onClickUser1}>User1</button>
    </div>
  );
}
