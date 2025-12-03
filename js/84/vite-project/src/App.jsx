import './App.css'

const ADDRESSES = [
  { id: 1, street: "1234 Elm Street", city: "Springwood", state: "Ohio", zip: "45377" },
  { id: 2, street: "42 Wallaby Way", city: "Sydney", state: "New South Wales", zip: "2000" },
  { id: 3, street: "221B Baker Street", city: "London", state: "", zip: "NW1 6XE" },
  { id: 4, street: "1600 Pennsylvania Avenue NW", city: "Washington", state: "D.C.", zip: "20500" },
  { id: 5, street: "10 Downing Street", city: "London", state: "", zip: "SW1A 2AA" },
  { id: 6, street: "350 Fifth Avenue", city: "New York", state: "NY", zip: "10118", },
  { id: 7, street: "Hogwarts Castle", city: "Highlands", state: "", zip: "" },
  { id: 8, street: "4 Privet Drive", city: "Little Whinging", state: "Surrey", zip: "" },
  { id: 9, street: "12 Grimmauld Place", city: "London", state: "", zip: "" },
  { id: 10, street: "742 Evergreen Terrace", city: "Springfield", state: "", zip: "" }
];


export default function App() {
  const listAddress = ADDRESSES.map(address =>
    <li>
      <Address street={`${address.street},`} city={`${address.city},`} state={`${address?.state},`} zip={address?.zip} />
    </li>
  );
  return (
    <>
      <h1>List of addresses</h1>
      <ul>{listAddress}</ul>
    </>
  )
}



function Address({ street, city, state, zip }) {
  return (
    <p>{street} {city} {state} {zip}</p>
  );
}
