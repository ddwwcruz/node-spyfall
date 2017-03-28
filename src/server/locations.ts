import Library from './library'

class Location {
    constructor(
        public readonly name: string,
        public readonly roles: string[] = []
    ) { }
}

const locations = new Library<Location>()
export default locations

locations.add(new Location('Airplane'))
locations.add(new Location('Bank'))
locations.add(new Location('Beach'))
locations.add(new Location('Cathedral'))
locations.add(new Location('Casino'))
locations.add(new Location('Circus Tent'))
locations.add(new Location('Corporate Party'))
locations.add(new Location('Crusader Army'))
locations.add(new Location('Day Spa'))

locations.add(new Location('Embassy'))
locations.add(new Location('Hospital'))
locations.add(new Location('Hotel'))
locations.add(new Location('Military Base'))
locations.add(new Location('Movie Studio'))
locations.add(new Location('Ocean Liner'))
locations.add(new Location('Passenger Train'))
locations.add(new Location('Pirate Ship'))
locations.add(new Location('Polar Station'))

locations.add(new Location('Police Station'))
locations.add(new Location('Restaurant'))
locations.add(new Location('School'))
locations.add(new Location('Service Station'))
locations.add(new Location('Space Station'))
locations.add(new Location('Submarine'))
locations.add(new Location('Supermarket'))
locations.add(new Location('Theater'))
locations.add(new Location('University'))
