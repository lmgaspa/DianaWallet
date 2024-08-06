# ProGuard rules for Android projects

# Preserve annotated methods and classes
-keep @androidx.annotation.Keep class * { *; }

# Preserve class names for all model classes used in JSON parsing
-keep class com.exemplo.app.model.** { *; }

# Preserve class names for Retrofit interfaces
-keep interface com.exemplo.app.api.** { *; }
