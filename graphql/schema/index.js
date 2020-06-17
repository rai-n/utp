//Object deconstruction used to parse graphql body and store it
const { buildSchema } = require('graphql');

// [!] is used to ensure that values/lists are not nullable

module.exports = buildSchema(`
type Booking {
    _id: ID!
    event: Event!
    user: User!
    createdAt: String!
    updatedAt: String!
}

type Event {
  _id: ID!
  title: String!
  description: String!
  price: Float!
  date: String!
  creator: User!
}

type User {
  _id: ID!
  firstName: String
  lastName: String
  email: String!
  password: String
  createdEvents: [Event!]
  role: String
}

type AuthData {
  userId: ID!
  token: String!
  tokenExpiration: Int!
}

input EventInput {
  title: String!
  description: String!
  price: Float!
  date: String!
}

input UserInput {
  email: String!
  password: String!
}

type Tester {
        _id: ID!
        firstName: String
        lastName: String
        addressLineOne: String
        town: String
        country: String
        postcode: String
        email: String
        telephoneNo: String
        Disability: [String]
        techSkill: String
        Devices: [String]
        specialHardware: String
        testingLocation: [String]
        Assistance: [String]
        additionalInformation: String
        standby: Boolean
        hearAbout: String
        dob: String
        rating: Float
}

input testerInput {
        firstName: String
        lastName: String
        addressLineOne: String
        town: String
        country: String
        postcode: String
        email: String
        telephoneNo: String
        Disability: [String]
        techSkill: String
        Devices: [String]
        specialHardware: String
        testingLocation: [String]
        Assistance: [String]
        additionalInformation: String
        standby: Boolean
        hearAbout: String
        dob: String
        rating: Float
}

type RootQuery {    
    events: [Event!]!
    bookings: [Booking!]!
    login(email: String!, password: String!): AuthData!
    testers: [Tester!]!
    users: [User]
}

type RootMutation {
    createEvent(eventInput: EventInput): Event
    createUser(userInput: UserInput): User
    createTester(testerInput: testerInput): Tester
    bookEvent(eventId: ID!): Booking!
    cancelBooking(bookingId: ID!): Event!
    updateUser(userInput : UserInput) : User
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);
