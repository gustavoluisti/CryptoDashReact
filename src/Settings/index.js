import React from 'react'
import Welcome from '../Settings/WelcomeMessage'
import ConfirmButton from '../Settings/ConfirmButton'
import Page from '../Shared/Page'

export default function () {
    return <Page name="settings">
        <Welcome name={"Welcome to CryptoDash"} />
        <ConfirmButton />
    </Page>
}