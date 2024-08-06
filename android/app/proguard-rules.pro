# ProGuard rules for Android projects

# Preserve annotated methods and classes
-keep @androidx.annotation.Keep class * { *; }

# Preserve class names for all model classes used in JSON parsing
-keep class com.exemplo.app.model.** { *; }

# Preserve class names for Retrofit interfaces
-keep interface com.exemplo.app.api.** { *; }

# Preserve classes with specific annotations (e.g., for Gson or Jackson serialization)
-keep class com.google.gson.annotations.SerializedName { *; }
-keepclassmembers class * {
    @com.google.gson.annotations.SerializedName <fields>;
}

# Retrofit and OkHttp
-keepattributes Signature
-keepattributes Exceptions
-keepattributes *Annotation*
-keep class retrofit2.** { *; }
-keep interface retrofit2.** { *; }
-dontwarn retrofit2.**

# Keep serialized fields (Gson, Jackson)
-keepclassmembers,allowobfuscation class * {
    @com.google.gson.annotations.SerializedName <fields>;
}
-keepnames class * implements java.io.Serializable
-keepclassmembers class * implements java.io.Serializable {
    static final long serialVersionUID;
    private static final java.io.ObjectStreamField[] serialPersistentFields;
    private void writeObject(java.io.ObjectOutputStream);
    private void readObject(java.io.ObjectInputStream);
    java.lang.Object writeReplace();
    java.lang.Object readResolve();
}

# OkHttp
-dontwarn okhttp3.**
-keep class okhttp3.** { *; }

# Timber (logging library)
-keep class timber.log.Timber { *; }
-keep class timber.log.Timber$* { *; }

# Android support libraries
-dontwarn android.support.**
-keep class android.support.** { *; }

# AndroidX libraries
-dontwarn androidx.**
-keep class androidx.** { *; }

# Prevent warnings and keep classes used by the app
-dontwarn com.example.myapp.**
-keep class com.example.myapp.** { *; }

# Maintain method names for logging
-assumenosideeffects class android.util.Log {
    public static boolean isLoggable(java.lang.String, int);
    public static int v(...);
    public static int i(...);
    public static int w(...);
    public static int d(...);
    public static int e(...);
}

# Ensure Butter Knife library retains annotation information
-keep class butterknife.** { *; }
-keep class **$$ViewInjector { *; }
-keepclasseswithmembernames class * {
    @butterknife.* <fields>;
}

# Keep necessary classes for Room (Persistence Library)
-keep class androidx.room.** { *; }
-keepclassmembers class androidx.room.** {
    *;
}

# Ensure Dagger keeps classes
-keep class dagger.** { *; }
-keep interface dagger.** { *; }

# Handle Glide image loading library
-keep class com.bumptech.glide.** { *; }
-keep class * implements com.bumptech.glide.module.GlideModule { *; }
-keep class * extends com.bumptech.glide.AppGlideModule { *; }
-keep class * extends com.bumptech.glide.module.LibraryGlideModule { *; }
-keep class * extends com.bumptech.glide.module.IntegrationLibraryGlideModule { *; }

# Ensure RxJava keeps classes
-keep class io.reactivex.** { *; }
-dontwarn io.reactivex.**

# Prevent warnings for missing classes
-dontwarn org.codehaus.**
-dontwarn javax.annotation.**

# Keep classes used in debugging and analysis
-keepnames class **.R
-keepclassmembers class **.R$* {
    public static <fields>;
}

# Keep attributes used by annotations
-keepattributes SourceFile,LineNumberTable
-keepattributes *Annotation*

# Maintain generic type information for Gson
-keepattributes Signature

# Ensure Parcelable objects are not obfuscated
-keep class * implements android.os.Parcelable { *; }
