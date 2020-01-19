import anyTest, { TestInterface } from 'ava'
import faker from 'faker'
import utils from '@xarples/utils'

import { User, sequelize } from '../src'

const test = anyTest as TestInterface<{User: User}>

test.serial.beforeEach(async t => {
  await sequelize.sync({ force: true })
})

test.serial.afterEach(async t => {
  await sequelize.drop()
})

test.serial('Should be create an user', async t => {
  const data = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: utils.encrypt(faker.internet.password())
  }

  const user = await User.create(data)

  t.truthy(user.id)
  t.truthy(user.createdAt)
  t.truthy(user.updatedAt)
  t.is(user.firstName, data.firstName)
  t.is(user.lastName, data.lastName)
  t.is(user.username, data.username)
  t.is(user.email, data.email)
  t.is(user.password, data.password)
})

test.serial('Should be find an user by id', async t => {
  const user = await createUser()
  const found = await User.findByPk(user.id)

  if (!found) {
    return t.fail('Invalid user id')
  }

  t.not(found, null)
  t.is(found.id, user.id)
  t.is(found.firstName, user.firstName)
  t.is(found.lastName, user.lastName)
  t.is(found.username, user.username)
  t.is(found.email, user.email)
  t.is(found.password, user.password)
})

test.serial('Should be find an user by username', async t => {
  const user = await createUser()
  const found = await User.findOne({ where: { username: user.username } })

  if (!found) {
    return t.fail('Invalid user username')
  }

  t.not(found, null)
  t.is(found.id, user.id)
  t.is(found.firstName, user.firstName)
  t.is(found.lastName, user.lastName)
  t.is(found.username, user.username)
  t.is(found.email, user.email)
  t.is(found.password, user.password)
})

test.serial('Should be find an user by email', async t => {
  const user = await createUser()
  const found = await User.findOne({ where: { email: user.email } })

  if (!found) {
    return t.fail('Invalid user email')
  }

  t.not(found, null)
  t.is(found.id, user.id)
  t.is(found.firstName, user.firstName)
  t.is(found.lastName, user.lastName)
  t.is(found.username, user.username)
  t.is(found.email, user.email)
  t.is(found.password, user.password)
})

test.todo('Should be update an user')
test.todo('Should be delete an user')

async function createUser () {
  const data = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: utils.encrypt(faker.internet.password())
  }

  return User.create(data)
}