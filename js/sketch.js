const net = new Net()
const mainGrid = new GridP5Definition(true, 'my-cvs', 60)

new p5(mainGrid.getBlueprint())

const main = new Main()
