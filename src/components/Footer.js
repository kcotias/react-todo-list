import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../redux/actions'

const Footer = () => (
    <div className={'footer'}>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>Todas</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Pendentes</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Resolvidas</FilterLink>
    </div>
)

export default Footer;