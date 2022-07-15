import React from 'react'
import { loginWithGoogle } from '../services/firebase'

const AuthContext = React.createContext()

const AuthProvider = (props) => {
    const [user, setUser] = React.useState(null)

    const login = async () => {
        const user = await loginWithGoogle()
        if (!user) {
            //fail to login
        }

        setUser(user)
    }

    const value = { user, login }

    //user state와 login function을 value로 제공하는 context의 provider 생성
    //user의 state에 따라 login page로 보낼 지 아니면 user data를 제공할 지 정하려 함
    return <AuthContext.Provider value={value} {...props} />
}

export { AuthContext, AuthProvider }