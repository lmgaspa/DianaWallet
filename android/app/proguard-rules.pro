android {
    ...
    buildTypes {
        release {
            // Enable Proguard to shrink and obfuscate the code
            minifyEnabled true
            // Use Proguard rules from the specified file
            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
        }
    }
}
