import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import BackButton from '../Components/BackButton';

const PrivacyPolicy = ({ navigation }) => {
    const handleBackPress = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <BackButton onPress={handleBackPress} />
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <Text style={styles.title}>Privacy Policy for Diana Wallet</Text>
                <Text style={styles.updateDate}>Last updated: 07/24/2024</Text>
                <Text style={styles.sectionTitle}>Welcome to Diana Wallet, a Wallet for Diana Global Exchange</Text>
                <Text style={styles.paragraph}>
                    This privacy policy explains how we handle and protect your personal data when you use our decentralized exchange (DEX) and Diana Wallet. Your privacy is important to us, and we are committed to safeguarding it.
                </Text>
                <Text style={styles.sectionTitle}>1. Introduction</Text>
                <Text style={styles.paragraph}>
                    Diana Global operates a decentralized exchange (DEX) and provides the Diana Wallet (referred to as "we," "our," "us," or "Diana Global"). This privacy policy outlines how we collect, use, and protect your personal data.
                </Text>
                <Text style={styles.sectionTitle}>2. Data We Collect</Text>
                <Text style={styles.paragraph}>
                    We collect the following types of data:
                </Text>
                <Text style={styles.listItem}>
                    Personal Data: Email address (for account setup and communication), Transaction data (for processing and verification), Wallet address (for transaction processing)
                </Text>
                <Text style={styles.listItem}>
                    Non-Personal Data: Usage data (for improving user experience), Device information (for compatibility and troubleshooting), Log data (for security monitoring)
                </Text>
                <Text style={styles.sectionTitle}>3. How We Use Your Data</Text>
                <Text style={styles.paragraph}>
                    We use your data to:
                </Text>
                <Text style={styles.listItem}>Provide and maintain our services</Text>
                <Text style={styles.listItem}>Process transactions and verify user identity</Text>
                <Text style={styles.listItem}>Communicate with you regarding updates, promotions, and support</Text>
                <Text style={styles.listItem}>Improve our platform and user experience</Text>
                <Text style={styles.listItem}>Ensure security and prevent fraud</Text>
                <Text style={styles.sectionTitle}>4. Data Sharing and Disclosure</Text>
                <Text style={styles.paragraph}>
                    We do not sell, trade, or otherwise transfer your personal data to outside parties. We may share data with:
                </Text>
                <Text style={styles.listItem}>Service providers (to assist in operations and improve our services)</Text>
                <Text style={styles.listItem}>Legal authorities (if required by law or to protect our rights)</Text>
                <Text style={styles.sectionTitle}>5. Data Security</Text>
                <Text style={styles.paragraph}>
                    We implement a variety of security measures to maintain the safety of your personal data. These measures include:
                </Text>
                <Text style={styles.listItem}>Encryption of sensitive data</Text>
                <Text style={styles.listItem}>Regular security audits</Text>
                <Text style={styles.listItem}>Access controls to data</Text>
                <Text style={styles.sectionTitle}>6. Data Retention</Text>
                <Text style={styles.paragraph}>
                    We retain your personal data only as long as necessary to fulfill the purposes outlined in this policy. Once your data is no longer needed, we will securely delete or anonymize it.
                </Text>
                <Text style={styles.sectionTitle}>7. User Rights</Text>
                <Text style={styles.paragraph}>
                    You have the right to:
                </Text>
                <Text style={styles.listItem}>Access your personal data</Text>
                <Text style={styles.listItem}>Request corrections to inaccurate data</Text>
                <Text style={styles.listItem}>Request deletion of your personal data</Text>
                <Text style={styles.listItem}>Object to or restrict the processing of your data</Text>
                <Text style={styles.listItem}>Withdraw consent for data processing</Text>
                <Text style={styles.paragraph}>
                    To exercise these rights, please contact us at [Privacy Contact Email].
                </Text>
                <Text style={styles.sectionTitle}>8. Changes to This Privacy Policy</Text>
                <Text style={styles.paragraph}>
                    We may update this privacy policy from time to time. Any changes will be posted on this page, and we will notify you via email or through our platform.
                </Text>
                <Text style={styles.sectionTitle}>9. Contact Us</Text>
                <Text style={styles.paragraph}>
                    If you have any questions or concerns about this privacy policy, please contact us at:
                </Text>
                <Text style={styles.paragraph}>
                    Diana Global{'\n'}
                    Email: luizmgasparettodev@gmail.com
                </Text>
                <Text style={styles.paragraph}>
                    For more details, please visit our website:{'\n'}
                    <Text style={styles.link} onPress={() => Linking.openURL('https://www.dianaglobal.com.br/privacy-policy')}>
                        https://www.dianaglobal.com.br/privacy-policy
                    </Text>
                </Text>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingTop: 100,
    },
    contentContainer: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'white',
    },
    updateDate: {
        fontSize: 14,
        color: 'white',
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        color: 'white',
    },
    paragraph: {
        fontSize: 16,
        marginBottom: 10,
        color: 'white',
        textAlign: 'justify',
    },
    listItem: {
        fontSize: 16,
        marginLeft: 20,
        marginBottom: 5,
        color: 'white',
        textAlign: 'justify',
    },
    link: {
        color: '#007BFF',
    },
});

export default PrivacyPolicy;
