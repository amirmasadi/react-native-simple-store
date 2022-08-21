import React, {useState, useRef} from 'react';
import {View, ScrollView, Image, TouchableOpacity} from 'react-native';

//components
import MyTextBold from '../../../shared/MyTextBold';

//styles
import {styles} from './styles';

//images and icons
import img1 from '../../../../assets/images/carousel-img-1.png';
import img2 from '../../../../assets/images/carousel-img-2.png';
import RightArrow from '../../../../assets/icons/right-arrow.svg';
import LeftArrow from '../../../../assets/icons/left-arrow.svg';

export default function index() {
  const [CurrentXOffset, setCurrentXOffset] = useState(0);
  const [scrollViewWidth, setScrollViewWidth] = useState(0);
  const carouselRef = useRef(null);

  const carouselSlides = [
    {
      img: img1,
      title: 'This season’s latest',
    },
    {
      img: img2,
      title: 'This season’s latest',
    },
  ];

  let eachItemOffset = scrollViewWidth / carouselSlides.length;
  const nextSlideHandler = () => {
    let _currentXOffset = CurrentXOffset + eachItemOffset;
    carouselRef.current.scrollTo({x: _currentXOffset, y: 0, animated: true});
  };
  const prevSlideHandler = () => {
    let _currentXOffset = CurrentXOffset - eachItemOffset;
    carouselRef.current.scrollTo({x: _currentXOffset, y: 0, animated: true});
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        snapToAlignment="center"
        snapToInterval={eachItemOffset}
        decelerationRate={0.8}
        bounces={false}
        showsHorizontalScrollIndicator={false}
        style={styles.carousel}
        ref={carouselRef}
        onContentSizeChange={(w, h) => setScrollViewWidth(w)}>
        {carouselSlides.map((slide, index) => (
          <View style={styles.slide} key={index}>
            <Image source={slide.img} />
            <View style={styles.titleWrapper}>
              {slide.title.split(' ').map((itm, index) => (
                <MyTextBold key={index} style={styles.title}>
                  {itm}
                </MyTextBold>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.indicatorsWrapper}>
        <TouchableOpacity style={styles.indicators} onPress={nextSlideHandler}>
          <RightArrow />
        </TouchableOpacity>
        <TouchableOpacity style={styles.indicators} onPress={prevSlideHandler}>
          <LeftArrow />
        </TouchableOpacity>
      </View>
    </View>
  );
}
