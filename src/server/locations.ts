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

locations.add(new Location('Embassy', [
    'Security Guard',
    'Admin Assistant',
    'Ambassador',
    'Government Official',
    'Tourist',
    'Refugee',
    'Diplomat'
]))
locations.add(new Location('Hospital', [
    'Nurse',
    'Doctor',
    'Anesthesiologist',
    'Intern',
    'Patient',
    'Therapist',
    'Surgeon'
]))
locations.add(new Location('Hotel', [
    'Doorman',
    'Security Guard',
    'Hotel Manager',
    'Housekeeper',
    'Hotel Guest',
    'Bartender',
    'Valet'
]))
locations.add(new Location('Military Base', [
    'Deserter',
    'Colonel',
    'Medic',
    'Soldier',
    'Sniper',
    'XO (Exec. Officer)',
    'Tank Commander'
]))
locations.add(new Location('Movie Studio', [
    'Stuntman',
    'Sound Engineer',
    'Cameraman',
    'Director',
    'Costume Artist',
    'Actor',
    'Producer'
]))
locations.add(new Location('Ocean Liner', [
    'Rich Passenger',
    'Cook',
    'Captain',
    'Bartender',
    'Musician',
    'Waiter',
    'Ship Mechanic'
]))
locations.add(new Location('Passenger Train', [
    'Mechanic',
    'Border Patrol',
    'Chef',
    'Engineer',
    'Steward',
    'Ticket Taker',
    'Passenger'
]))
locations.add(new Location('Pirate Ship', [
    'Cook',
    'Sailor',
    'Slave',
    'Cannoneer',
    'Bound Prisoner',
    'Cabin Boy',
    'Pirate Captain'
]))
locations.add(new Location('Polar Station', [
    'Medic',
    'Geologist',
    'Expedition Leader',
    'Biologist',
    'Radioman',
    'Hydrologist',
    'Meteorologiest'
]))

locations.add(new Location('Police Station'))
locations.add(new Location('Restaurant'))
locations.add(new Location('School'))
locations.add(new Location('Service Station'))
locations.add(new Location('Space Station'))
locations.add(new Location('Submarine'))
locations.add(new Location('Supermarket'))
locations.add(new Location('Theater'))
locations.add(new Location('University'))
