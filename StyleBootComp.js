export default function StyleBootComp(){
    return(
        <div>
            <header>Welcome To ReactJS</header>
            <table  className=" table bg-white text-dark table-bordered " >
                <tr>
                    <td>ReactJS</td>
                     <td>ReactJS</td>
                </tr>
                <tr>
                    <td>ReactJS</td>
                     <td>ReactJS</td>
                </tr>
                <tr>
                    <td>ReactJS</td> 
                    <td>ReactJS</td>
                </tr>
                <tr>
                    <td>ReactJS</td> 
                    <td>ReactJS</td>
                </tr>
            </table>
            <br></br>
            <button class="btn btn-success">
                Click Me
            </button>
            <br></br>
            <form>
            Enter Name
            <input type="text" name="ename"></input><br></br>
            Enter Password 
            <input type="password"></input>
            </form>
        </div>
    )
}