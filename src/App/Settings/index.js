import React from 'react'
import Welcome from './WelcomeMessage'
import ConfirmButton from './ConfirmButton'

export default function () {
    return <div>
        <Welcome name={"Welcome to CryptoDash"} />
        <ConfirmButton />
    </div>
}