import React from 'react';
import { 
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';

type SectionProps = {
  title: string;
  children: React.ReactNode; // Include children property
};

const Section: React.FC<SectionProps> = ({ title, children }) => {
  const isDarkMode = useColorScheme() === 'dark';
  
  return (
    <View style={[styles.sectionContainer, { backgroundColor: isDarkMode ? Colors.black : Colors.white }]}>
      <Text style={[styles.sectionTitle, { color: isDarkMode ? Colors.white : Colors.black }]}>{title}</Text>
      <Text style={[styles.sectionDescription, { color: isDarkMode ? Colors.light : Colors.dark }]}>{children}</Text>
    </View>
  );
};

const NewHomeScreen: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: isDarkMode ? Colors.darker : Colors.lighter }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ backgroundColor: isDarkMode ? Colors.black : Colors.white }}>
        <Header />
        <View>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
            <LearnMoreLinks />
          </Section>
          <Button title="Go Back" onPress={() => navigation.goBack()} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default NewHomeScreen;
