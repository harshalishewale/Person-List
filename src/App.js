import './App.css';

const App = () => {
  return <PersonList />
}

const PersonList = () => {
  const people = [
    {
      img: 22, name: "Mihir", job: "Developer"
    },
    {
      img: 34, name: "Ram", job: "Admin"
    },
    {
      img: 12, name: "Akshay", job: "Designer"
    }
  ]
  return (
    <section>
    <Person Person={people[0]}/>
    <Person Person={people[1]}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error optio voluptates animi non minus. Aliquam!
    </Person>
    <Person Person={people[2]}/>
    </section>
  )
}

const Person = (props) => {

  const{img,name,job}=props.Person;
  const {children}=props;
  const url = `https://randomuser.me/api/portraits/med/men/${img}.jpg`;
  return (
    <div className='person'>
      <img src={url} alt='img' />
      <div><strong>{name}</strong></div>
      <div><strong>{job}</strong></div>
      <div className='child'>{children}</div>
    </div>
  )
}


export default App;
