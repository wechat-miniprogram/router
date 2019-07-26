const _ = require('./utils')

test('render', async () => {
  const componentId = _.load('index', 'comp')
  const component = _.render(componentId)

  const parent = document.createElement('parent-wrapper')
  component.attach(parent)

  expect(_.match(component.dom, '<wx-view></wx-view>')).toBe(true)

  await _.sleep(10)

  expect(_.match(component.dom, '<wx-view></wx-view>')).toBe(true)  
})
