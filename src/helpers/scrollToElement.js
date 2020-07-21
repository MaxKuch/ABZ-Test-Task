const scrollToElement = ref => {
    const regElem = ref.getBoundingClientRect()
    window.scrollTo(0, regElem.top + window.pageYOffset)
}

export default scrollToElement