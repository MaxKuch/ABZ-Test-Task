import React, {useEffect} from 'react' 
import {connect} from 'react-redux'
import {useSelector} from 'react-redux'
import Section from '../Section'
import User from '../User'
import Button from '../Button'
import SectionHeader from '../SectionHeader'
import {initPage, showMore} from '../redux/actions'

const UsersSection = (usersList) => {
     const {users, page, initPage, showMore} = usersList
     const loading = useSelector(state => state.app.loading)
    useEffect(()=>{initPage()}, [])
    return (
        <Section extraClasses="section-users section_grey-bg">
            <SectionHeader extraClasses="section-users__header" title="Our cheerful users" addition="Attention! Sorting users by registration date"/>
            <div className = "section-users__users-wrapper">
                {users.map(user=>{
                    return (
                        <User key={user.id} img={user.photo} name={user.name} position={user.position} email={user.email} phone={user.phone}></User>
                    )
                })}
            </div>
            {loading ? <div className="lds-ripple mx-auto"><div></div><div></div></div> : ''}
            {(page.page !== page.total_pages) ? (<Button handleClick = {() => showMore(page.links.next_url)} disabled={loading}  extraClasses='mx-auto'>Show more</Button>) : ''}
        </Section>
    )
}

const mapStateToProps = state => {
    return state.usersList
}

const mapDispatchToProps = {
    initPage,
    showMore
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersSection)