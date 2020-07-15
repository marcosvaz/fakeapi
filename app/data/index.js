const faker = require('faker'); // Biblioteca para dados fake
faker.locale = 'pt_BR';

const md5 = require('md5'); // Biblioteca de criptografia

/**
 * randomPassword
 * @example 012345 -> md5() -> 775b70588a139c914412b7fdbc20d1c7
 */
const randomPassword = () => {
  var passArray = [];
  var pass = "";

  for (let i = 0; passArray.length < 6; i++) {
    passArray.push((Math.random() * 100).toFixed(0));
  }

  for (let i = 0; i < passArray.length; i++) {
    pass += passArray[i].toString();
  }

  return md5(pass);
}

module.exports = {
  users: [
    {
      _uuid: "fdc31cbe-07cc-4894-8629-3a1633f938e3",
      name: "Marcos Vaz",
      email: "marcosvaz.me@gmail.com",
      password: md5("SenhaTeste"),
      birthday: "1999-06-04T03:00:00.000Z",
      profile_image: faker.image.avatar(),
    },
    {
      _uuid: faker.random.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: randomPassword(),
      birthday: faker.date.between(1920, 2020),
      profile_image: faker.image.avatar(),
    },
    {
      _uuid: faker.random.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: randomPassword(),
      birthday: faker.date.between(1920, 2020),
      profile_image: faker.image.avatar(),
    },
    {
      _uuid: faker.random.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: randomPassword(),
      birthday: faker.date.between(1920, 2020),
      profile_image: faker.image.avatar(),
    },
    {
      _uuid: faker.random.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: randomPassword(),
      birthday: faker.date.between(1920, 2020),
      profile_image: faker.image.avatar(),
    },
    {
      _uuid: faker.random.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: randomPassword(),
      birthday: faker.date.between(1920, 2020),
      profile_image: faker.image.avatar(),
    },
    {
      _uuid: faker.random.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: randomPassword(),
      birthday: faker.date.between(1920, 2020),
      profile_image: faker.image.avatar(),
    },
    {
      _uuid: faker.random.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: randomPassword(),
      birthday: faker.date.between(1920, 2020),
      profile_image: faker.image.avatar(),
    },
    {
      _uuid: faker.random.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: randomPassword(),
      birthday: faker.date.between(1920, 2020),
      profile_image: faker.image.avatar(),
    },
    {
      _uuid: faker.random.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: randomPassword(),
      birthday: faker.date.between(1920, 2020),
      profile_image: faker.image.avatar(),
    },
    {
      _uuid: faker.random.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: randomPassword(),
      birthday: faker.date.between(1920, 2020),
      profile_image: faker.image.avatar(),
    },
    {
      _uuid: faker.random.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: randomPassword(),
      birthday: faker.date.between(1920, 2020),
      profile_image: faker.image.avatar(),
    },
    {
      _uuid: faker.random.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: randomPassword(),
      birthday: faker.date.between(1920, 2020),
      profile_image: faker.image.avatar(),
    },
    {
      _uuid: faker.random.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: randomPassword(),
      birthday: faker.date.between(1920, 2020),
      profile_image: faker.image.avatar(),
    },
    {
      _uuid: faker.random.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: randomPassword(),
      birthday: faker.date.between(1920, 2020),
      profile_image: faker.image.avatar(),
    },
    {
      _uuid: faker.random.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: randomPassword(),
      birthday: faker.date.between(1920, 2020),
      profile_image: faker.image.avatar(),
    },
    {
      _uuid: faker.random.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: randomPassword(),
      birthday: faker.date.between(1920, 2020),
      profile_image: faker.image.avatar(),
    },
    {
      _uuid: faker.random.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: randomPassword(),
      birthday: faker.date.between(1920, 2020),
      profile_image: faker.image.avatar(),
    },
    {
      _uuid: faker.random.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: randomPassword(),
      birthday: faker.date.between(1920, 2020),
      profile_image: faker.image.avatar(),
    },
    {
      _uuid: faker.random.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: randomPassword(),
      birthday: faker.date.between(1920, 2020),
      profile_image: faker.image.avatar(),
    },
    {
      _uuid: faker.random.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: randomPassword(),
      birthday: faker.date.between(1920, 2020),
      profile_image: faker.image.avatar(),
    },
    {
      _uuid: faker.random.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: randomPassword(),
      birthday: faker.date.between(1920, 2020),
      profile_image: faker.image.avatar(),
    },
    {
      _uuid: faker.random.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: randomPassword(),
      birthday: faker.date.between(1920, 2020),
      profile_image: faker.image.avatar(),
    },
    {
      _uuid: faker.random.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: randomPassword(),
      birthday: faker.date.between(1920, 2020),
      profile_image: faker.image.avatar(),
    },
    {
      _uuid: faker.random.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: randomPassword(),
      birthday: faker.date.between(1920, 2020),
      profile_image: faker.image.avatar(),
    },
    {
      _uuid: faker.random.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: randomPassword(),
      birthday: faker.date.between(1920, 2020),
      profile_image: faker.image.avatar(),
    },
    {
      _uuid: faker.random.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: randomPassword(),
      birthday: faker.date.between(1920, 2020),
      profile_image: faker.image.avatar(),
    },
    {
      _uuid: faker.random.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: randomPassword(),
      birthday: faker.date.between(1920, 2020),
      profile_image: faker.image.avatar(),
    },
    {
      _uuid: faker.random.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: randomPassword(),
      birthday: faker.date.between(1920, 2020),
      profile_image: faker.image.avatar(),
    },
    {
      _uuid: faker.random.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: randomPassword(),
      birthday: faker.date.between(1920, 2020),
      profile_image: faker.image.avatar(),
    },
    {
      _uuid: faker.random.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: randomPassword(),
      birthday: faker.date.between(1920, 2020),
      profile_image: faker.image.avatar(),
    },
    {
      _uuid: faker.random.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: randomPassword(),
      birthday: faker.date.between(1920, 2020),
      profile_image: faker.image.avatar(),
    },
    {
      _uuid: faker.random.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: randomPassword(),
      birthday: faker.date.between(1920, 2020),
      profile_image: faker.image.avatar(),
    },
    {
      _uuid: faker.random.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: randomPassword(),
      birthday: faker.date.between(1920, 2020),
      profile_image: faker.image.avatar(),
    },
    {
      _uuid: faker.random.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: randomPassword(),
      birthday: faker.date.between(1920, 2020),
      profile_image: faker.image.avatar(),
    },
  ]
}