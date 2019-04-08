import React from 'react'
import Welcome from '../Settings/WelcomeMessage'
import ConfirmButton from '../Settings/ConfirmButton'
import Page from '../Shared/Page'
import CoinGrid from './CoinGrid'
import Search from '../Settings/Search';

export default function () {
    return <Page name="settings">
        <Welcome />

        <CoinGrid topSection />
        <ConfirmButton />
        <Search />
        <CoinGrid />
    </Page>
}