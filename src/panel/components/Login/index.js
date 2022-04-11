import { Input, Button } from "../../../utils/tools";

function Login() {
    return ( 
    <div className="mt-5">
        <form>

        <div className="offset-4 col-4">
            <Input 
                type="text"
                name="username"
                className="form-control"
                id="username"
                value=""
                placeholder="UserName" 
            />
        </div>

        <div className="offset-4 col-4">
            <Input 
                type="password"
                name="password"
                className="form-control"
                id="password"
                value=""
                placeholder="Password" 
            />
        </div>

        <div className="offset-4 col-2">
            <Button 
                type="submit"
                name=""
                value="Login"
                className="btn btn-success"
                id="" 
            />
        </div>
        </form>
    </div>
    )
}

export default Login;