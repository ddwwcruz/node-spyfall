import Library from './library'

class Location {
    constructor(
        public readonly name: string,
        public readonly roles: string[] = []
    ) { }
}

const locations = new Library<Location>()
export default locations

