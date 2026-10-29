import type { ImageSourcePropType } from 'react-native';

export const SPEAKER_PHOTOS: Readonly<Record<string, ImageSourcePropType>> = {
  '/assets/img/speakers/bear.jpg': require('../../assets/images/speakers/bear.jpg'),
  '/assets/img/speakers/cheetah.jpg': require('../../assets/images/speakers/cheetah.jpg'),
  '/assets/img/speakers/duck.jpg': require('../../assets/images/speakers/duck.jpg'),
  '/assets/img/speakers/elephant.jpg': require('../../assets/images/speakers/elephant.jpg'),
  '/assets/img/speakers/eagle.jpg': require('../../assets/images/speakers/eagle.jpg'),
  '/assets/img/speakers/giraffe.jpg': require('../../assets/images/speakers/giraffe.jpg'),
  '/assets/img/speakers/iguana.jpg': require('../../assets/images/speakers/iguana.jpg'),
  '/assets/img/speakers/kitten.jpg': require('../../assets/images/speakers/kitten.jpg'),
  '/assets/img/speakers/lion.jpg': require('../../assets/images/speakers/lion.jpg'),
  '/assets/img/speakers/mouse.jpg': require('../../assets/images/speakers/mouse.jpg'),
  '/assets/img/speakers/puppy.jpg': require('../../assets/images/speakers/puppy.jpg'),
  '/assets/img/speakers/rabbit.jpg': require('../../assets/images/speakers/rabbit.jpg'),
  '/assets/img/speakers/turtle.jpg': require('../../assets/images/speakers/turtle.jpg'),
};

export function speakerPhoto(profilePic: string): ImageSourcePropType | undefined {
  return Object.prototype.hasOwnProperty.call(SPEAKER_PHOTOS, profilePic) ? SPEAKER_PHOTOS[profilePic] : undefined;
}
