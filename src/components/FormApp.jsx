import { useForm } from "./hooks/useForm"

export const FormApp = () => {
    
    const initialForm ={
        username: '',
        nickname: '',
        email: '',
        password: ''
    }

    

    const {username, nickname, email, password, onInputChange} = useForm(initialForm);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({username, nickname, email, password});
    }

  return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="username"
                        name="username"
                        value={username}
                        onChange={onInputChange}>
                    </input>
                </div>
                <div className="mb-3">
                    <label htmlFor="nickname" className="form-label">Nickname</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="nickname"
                        name="nickname"
                        value={nickname}
                        onChange={onInputChange}>
                    </input>
                </div>
                 <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input         
                        type="email" 
                        className="form-control" 
                        id="email"
                        name="email"
                        value={email}
                        onChange={onInputChange}>
                    </input>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="password"
                        name="password"
                        value={password}
                        onChange={onInputChange}>
                    </input>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>


        </>
  )
}
