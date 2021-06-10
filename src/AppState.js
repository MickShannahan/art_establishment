import { reactive } from 'vue'

const testData = [
  {
    id: '123',
    title: 'test1',
    imgUrl: 'https://cdna.artstation.com/p/assets/images/images/038/092/098/large/karine-villette-beast-lhd.jpg?1622209404',
    photos: [
      {
        title: 'pic',
        imgUrl: 'https://cdnb.artstation.com/p/assets/images/images/038/092/115/large/karine-villette-cave-part-02-lhd.jpg?1622139620'
      },
      {
        title: 'pic',
        imgUrl: 'https://cdnb.artstation.com/p/assets/images/images/038/092/111/large/karine-villette-cave-lhd.jpg?1622139615'
      },
      {
        title: 'pic',
        imgUrl: 'https://cdnb.artstation.com/p/assets/images/images/038/092/131/large/karine-villette-market-lhd.jpg?1622139631'
      },
      {
        title: 'pic',
        imgUrl: 'https://cdna.artstation.com/p/assets/images/images/038/092/104/large/karine-villette-bridge-orc-desgin.jpg?1622139608'
      }
    ],
    creator: {
      name: 'tester',
      picture: 'https://thiscatdoesnotexist.com',
      id: 'abc'
    }
  },
  {
    id: '456',
    title: 'test1',
    imgUrl: 'https://cdna.artstation.com/p/assets/images/images/038/092/098/large/karine-villette-beast-lhd.jpg?1622209404',
    photos: [
      {
        title: 'pic',
        imgUrl: 'https://cdnb.artstation.com/p/assets/images/images/038/092/115/large/karine-villette-cave-part-02-lhd.jpg?1622139620'
      },
      {
        title: 'pic',
        imgUrl: 'https://cdnb.artstation.com/p/assets/images/images/038/092/111/large/karine-villette-cave-lhd.jpg?1622139615'
      },
      {
        title: 'pic',
        imgUrl: 'https://cdnb.artstation.com/p/assets/images/images/038/092/131/large/karine-villette-market-lhd.jpg?1622139631'
      },
      {
        title: 'pic',
        imgUrl: 'https://cdna.artstation.com/p/assets/images/images/038/092/104/large/karine-villette-bridge-orc-desgin.jpg?1622139608'
      }
    ],
    creator: {
      name: 'tester',
      picture: 'https://thiscatdoesnotexist.com',
      id: 'abc'
    }
  },
  {
    id: '789',
    title: 'test1',
    imgUrl: 'https://cdna.artstation.com/p/assets/images/images/038/092/098/large/karine-villette-beast-lhd.jpg?1622209404',
    photos: [
      {
        title: 'pic',
        imgUrl: 'https://cdnb.artstation.com/p/assets/images/images/038/092/115/large/karine-villette-cave-part-02-lhd.jpg?1622139620'
      },
      {
        title: 'pic',
        imgUrl: 'https://cdnb.artstation.com/p/assets/images/images/038/092/111/large/karine-villette-cave-lhd.jpg?1622139615'
      },
      {
        title: 'pic',
        imgUrl: 'https://cdnb.artstation.com/p/assets/images/images/038/092/131/large/karine-villette-market-lhd.jpg?1622139631'
      },
      {
        title: 'pic',
        imgUrl: 'https://cdna.artstation.com/p/assets/images/images/038/092/104/large/karine-villette-bridge-orc-desgin.jpg?1622139608'
      }
    ],
    creator: {
      name: 'tester',
      picture: 'https://thiscatdoesnotexist.com',
      id: 'abc'
    }
  }
]

const testProfile = {
  id: 'abc',
  name: 'mick',
  email: 'jbalivn@rocket-mortgage.com',
  picture: 'https://thiscatdoesnotexist.com',
  bio: 'this is a test bio, this is a test bio, this is a test bio test bio, this right here is a test bio.'
}

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: { },
  projects: testData,
  activeProject: {},
  activeProfile: testProfile
})
