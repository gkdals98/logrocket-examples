import React from 'react'
import { AuthContext } from '../context/auth'

function useAuth() {
    const value = React.useContext(AuthContext)

    if(!value) {
        throw new Error('There is no auth value in AuthContext.')
    }
    return value
}

export { useAuth }