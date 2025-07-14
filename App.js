import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const Section = ({title, description}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View
      style={[
        styles.card,
        {backgroundColor: isDarkMode ? '#1f1f1f' : '#fff'},
      ]}>
      <Text style={[styles.cardTitle, {color: isDarkMode ? '#fff' : '#111'}]}>
        {title}
      </Text>
      <Text
        style={[
          styles.cardDescription,
          {color: isDarkMode ? '#ccc' : '#555'},
        ]}>
        {description}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? '#121212' : '#f2f2f2',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.scrollView}>
        <Text style={[styles.heading, {color: isDarkMode ? '#fff' : '#000'}]}>
          👋 Welcome to MeId
        </Text>
        <Text
          style={[
            styles.subHeading,
            {color: isDarkMode ? '#aaa' : '#333'},
          ]}>
          Start building your beautiful app experience.
        </Text>

        <Section
          title="🚀 Fast Refresh"
          description="Changes you make in your code appear instantly in the app."
        />
        <Section
          title="🧪 Debug Tools"
          description="Use developer tools like React DevTools and Flipper for debugging."
        />
        <Section
          title="📚 Learn React Native"
          description="Visit the official docs to master React Native step-by-step."
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    padding: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 16,
    fontWeight: '400',
  },
});

export default App;
