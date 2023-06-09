import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ExpandableParagraph = ({ text, maxHeight }) => {
  const [expanded, setExpanded] = useState(false);
  const [isEllipsisActive, setIsEllipsisActive] = useState(false);
  const paragraphRef = useRef(null);

  useEffect(() => {
    if (paragraphRef.current) {
      const { height, lineCount } = paragraphRef.current;
    //   console.log("Console paragraph=====>",paragraphRef.current.numberOfLines)
      setIsEllipsisActive(height > maxHeight && lineCount > 2);
    }
  }, []);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <View>
      <Text
        ref={paragraphRef}
        style={[
          styles.paragraph,
          { maxHeight: expanded ? 'auto' : maxHeight },
        ]}
        numberOfLines={expanded ? undefined : 3}
      >
        {text}
      </Text>
      {isEllipsisActive && (
        <TouchableOpacity onPress={toggleExpanded}>
          <Text style={styles.seeMore}>{expanded ? 'See Less' : 'See More'}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 8,
    overflow: 'hidden',
  },
  seeMore: {
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ExpandableParagraph;
