import React from 'react'
import {AppContext} from '../AppProvider'

export default function Welcome({firstVisit}) {
    return (
        <AppContext.Consumer>
        {({firstVisit}) =>
        firstVisit ? <div>
        Welcome to CryptoDash, por favor selecione suas coins favoritas.{' '}

        </div> : null
    }
        </AppContext.Consumer>
    )
}