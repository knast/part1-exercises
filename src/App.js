const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part1 = (props) => {

  return (
    <p>
      {props.part1} {props.exercise1}
    </p>
  )
}

const Part2 = (props) => {
  return (
    <p>
      {props.part2} {props.exercise2}
    </p>
  )
}

const Part3 = (props) => {
  return (
    <p>
      {props.part3} {props.exercise3}
    </p>
  )
}



const Content = (props) => {
  return (
    <div>
      <Part1 part1 = {props.part1} exercise1 = {props.exercise1} />
      <Part2 part2 = {props.part2} exercise2 = {props.exercise2}/>
      <Part3 part3 = {props.part3} exercise3 = {props.exercise3}/>
    </div>
  )
}

const Total = () => {
  const exercise1 = 10;
  const exercise2 = 7;
  const exercise3 = 14;

  return (
    <p>Number of exercises {exercise1 + exercise2 + exercise3}</p>
  )

}


function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content part1 = {course.parts[0].name} 
      exercise1 = {course.parts[0].exercises} 
      part2={course.parts[1].name} 
      exercise2={course.parts[1].exercises} 
      part3 = {course.parts[2].name} 
      exercise3 = {course.parts[2].exercises}/>
      <Total />
    </div>
  );
}

export default App;
