import React from 'react'
import { SelectProfileContainer } from './profile'
import {useState, useContext, useEffect} from 'react'
import {FirebaseContext} from '../context/firebase'
import {Loading} from '../components'
import {Header} from '../components'

export default function BrowseContainer ({slides}) {
    const[profile, setProfile] = useState({})
    const[loading, setLoading] = useState(true)
    const {firebase} = useContext(FirebaseContext)
    const user = firebase.auth().currentUser || {}

    useEffect(()=>{
        console.log('profile', profile)
        setTimeout(() =>{
            setLoading(false)
        }, 3000)
    }, [profile.displaName])
    
    return profile.displayName ? (
        <>
        {loading ? (
        <Loading src={user.photoURL}/>
        ): (
            <Loading.ReleaseBody />
        )}
        <Header src="joker1">
            <p>Hello World</p>
        </Header>
        </>
    ) : (
        <SelectProfileContainer user={user} setProfile={setProfile} />
    )
}