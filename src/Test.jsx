import { useSelector } from "react-redux"

function Test() {

    const test = useSelector((state) => state);

    console.log(test);

  return (
    <div>Test</div>
  )
}

export default Test