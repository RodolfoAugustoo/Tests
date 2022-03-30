import {describe, expect, jest, test} from '@jest/globals'

import superTest from 'supertest'
import server from '../../src/server'


describe('API E2E Teste Suite' ,() => {

  test('GET / - should return an array', async() => {
    const response = await superTest(server)
    .get('/')

    const data = JSON.parse(response.text)

    console.log('text',response.text)
  })

  test.todo('POST / - should save an item and return OK')
  test.todo('DELETE / -should delete all items and return OK')
})