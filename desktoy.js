async function onCollision() {
	await Sound.EightBit.Bumper.play(false);
	setMainLed({ r: 255, g: 0, b: 0 });
	await spin(999999, 1);
	setMainLed({ r: 0, g: 0, b: 0 });
}
registerEvent(EventType.onCollision, onCollision);

async function startProgram() {
	resetAim();
	stopRoll();
	setMainLed({ r: 0, g: 0, b: 0 });
	while (true) {
		await roll(getRandomInt(0, 360), 66, 0.1);
		await Sound.Menu.Exit.play(false);
		await delay(getRandomInt(0, 2));
		await delay(0.025);
	}
}

async function onGyroMax() {
	await Sound.EightBit.LevelComplete.play(false);
	stopRoll();
}
registerEvent(EventType.onGyroMax, onGyroMax);

async function onLanding() {
	await Sound.EightBit.Alert.play(false);
	setMainLed({ r: 255, g: 0, b: 0 });
	await delay(1);
	setMainLed({ r: 0, g: 0, b: 0 });
}
registerEvent(EventType.onLanding, onLanding);

async function onFreefall() {
	await Sound.EightBit.Hit.play(false);
	setMainLed({ r: 0, g: 255, b: 0 });
	await delay(1);
	setMainLed({ r: 0, g: 0, b: 0 });
	await spin(999999, 2);
}
registerEvent(EventType.onFreefall, onFreefall);
