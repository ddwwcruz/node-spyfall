import Library from './library'

class Location {
    constructor(
        public readonly name: string,
        public readonly roles: string[] = []
    ) { }
}

const locations = new Library<Location>()
export default locations

locations.add(new Location('Airplane', [
    '1st Class Passenger',
    'Air Marshal',
    'Mechanic',
    'Coach Passenger',
    'Flight Attendant',
    'Co-Pilot',
    'Captain'
]))
locations.add(new Location('Bank', [
    'Armored Car Driver',
    'Bank Manager',
    'Loan Consultant',
    'Bank Robber',
    'Customer',
    'Security Guard',
    'Bank Teller'
]))
locations.add(new Location('Beach', [
    'Beach Bartender',
    'Kite Surfer',
    'Lifeguard',
    'Thief',
    'Beach Goer',
    'Beach Photographer',
    'Ice Cream Man'
]))
locations.add(new Location('Cathedral', [
    'Priest',
    'Beggar',
    'Sinner',
    'Parishioner',
    'Tourist',
    'Deacon',
    'Choir Singer'
]))
locations.add(new Location('Casino', [
    'Bartender',
    'Head of Security',
    'Bouncer',
    'Pit Boss',
    'Hustler',
    'Dealer',
    'Gambler'
]))
locations.add(new Location('Circus Tent', [
    'Acrobat',
    'Animal Trainer',
    'Magician',
    'Audience Member',
    'Fire Eater',
    'Clown',
    'Juggler'
]))
locations.add(new Location('Corporate Party', [
    'Enterntainer',
    'Manager',
    'Party Crasher',
    'Owner/CEO',
    'Admin Assistant',
    'Accountant',
    'Delivery Boy'
]))
locations.add(new Location('Crusader Army', [
    'Monk',
    'Imprisoned Arab',
    'Servant',
    'Bishop',
    'Squire',
    'Archer',
    'Knight'
]))
locations.add(new Location('Day Spa', [
    'Customer',
    'Stylist',
    'Massage Tech',
    'Manicurist',
    'Makeup Artist',
    'Dematologist',
    'Beautician'
]))

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
