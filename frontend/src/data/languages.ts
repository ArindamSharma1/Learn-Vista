export type Region = 'Asia' | 'Europe' | 'Africa' | 'Americas' | 'Oceania' | 'Middle East';
export type Script = 'Latin' | 'Devanagari' | 'Arabic' | 'Cyrillic' | 'Han' | 'Other';
export type SupportLevel = 'Full' | 'Partial' | 'Beta';

export interface LanguageData {
    code: string;
    name: string; // English name
    nativeName: string; // Native script
    script: Script;
    region: Region;
    uiSupport: SupportLevel;
    courseContent: boolean;
    audioSupport: boolean;
    subtitles: boolean;
    screenReader: boolean;
    tts: boolean;
    captionsAccuracy: 'AI' | 'Reviewed' | 'Native';
    lastUpdated: string;
}

export const languages: LanguageData[] = [
    { code: 'en', name: 'English', nativeName: 'English', script: 'Latin', region: 'Europe', uiSupport: 'Full', courseContent: true, audioSupport: true, subtitles: true, screenReader: true, tts: true, captionsAccuracy: 'Native', lastUpdated: '2024-12-01' },
    { code: 'es', name: 'Spanish', nativeName: 'Español', script: 'Latin', region: 'Europe', uiSupport: 'Full', courseContent: true, audioSupport: true, subtitles: true, screenReader: true, tts: true, captionsAccuracy: 'Native', lastUpdated: '2024-11-15' },
    { code: 'fr', name: 'French', nativeName: 'Français', script: 'Latin', region: 'Europe', uiSupport: 'Full', courseContent: true, audioSupport: true, subtitles: true, screenReader: true, tts: true, captionsAccuracy: 'Native', lastUpdated: '2024-11-20' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', script: 'Devanagari', region: 'Asia', uiSupport: 'Full', courseContent: true, audioSupport: true, subtitles: true, screenReader: true, tts: true, captionsAccuracy: 'Native', lastUpdated: '2024-12-10' },
    { code: 'ar', name: 'Arabic', nativeName: 'العربية', script: 'Arabic', region: 'Middle East', uiSupport: 'Full', courseContent: true, audioSupport: true, subtitles: true, screenReader: true, tts: true, captionsAccuracy: 'Native', lastUpdated: '2024-10-05' },
    { code: 'zh', name: 'Chinese (Simplified)', nativeName: '简体中文', script: 'Han', region: 'Asia', uiSupport: 'Full', courseContent: true, audioSupport: true, subtitles: true, screenReader: true, tts: true, captionsAccuracy: 'Native', lastUpdated: '2024-12-01' },
    { code: 'pt', name: 'Portuguese', nativeName: 'Português', script: 'Latin', region: 'Europe', uiSupport: 'Full', courseContent: true, audioSupport: true, subtitles: true, screenReader: true, tts: true, captionsAccuracy: 'Native', lastUpdated: '2024-11-01' },
    { code: 'ru', name: 'Russian', nativeName: 'Русский', script: 'Cyrillic', region: 'Europe', uiSupport: 'Full', courseContent: true, audioSupport: true, subtitles: true, screenReader: true, tts: true, captionsAccuracy: 'Native', lastUpdated: '2024-11-10' },
    { code: 'ja', name: 'Japanese', nativeName: '日本語', script: 'Han', region: 'Asia', uiSupport: 'Full', courseContent: true, audioSupport: true, subtitles: true, screenReader: true, tts: true, captionsAccuracy: 'Native', lastUpdated: '2024-11-25' },
    { code: 'de', name: 'German', nativeName: 'Deutsch', script: 'Latin', region: 'Europe', uiSupport: 'Full', courseContent: true, audioSupport: true, subtitles: true, screenReader: true, tts: true, captionsAccuracy: 'Native', lastUpdated: '2024-10-20' },
    { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', script: 'Other', region: 'Asia', uiSupport: 'Partial', courseContent: true, audioSupport: false, subtitles: true, screenReader: true, tts: false, captionsAccuracy: 'Reviewed', lastUpdated: '2024-09-15' },
    { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', script: 'Other', region: 'Asia', uiSupport: 'Partial', courseContent: true, audioSupport: true, subtitles: false, screenReader: true, tts: false, captionsAccuracy: 'AI', lastUpdated: '2024-08-30' },
    { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', script: 'Other', region: 'Asia', uiSupport: 'Partial', courseContent: true, audioSupport: false, subtitles: true, screenReader: true, tts: false, captionsAccuracy: 'Reviewed', lastUpdated: '2024-09-01' },
    { code: 'mr', name: 'Marathi', nativeName: 'मराठी', script: 'Devanagari', region: 'Asia', uiSupport: 'Partial', courseContent: true, audioSupport: true, subtitles: true, screenReader: true, tts: false, captionsAccuracy: 'Reviewed', lastUpdated: '2024-10-12' },
    { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', script: 'Other', region: 'Asia', uiSupport: 'Partial', courseContent: true, audioSupport: true, subtitles: true, screenReader: true, tts: false, captionsAccuracy: 'Reviewed', lastUpdated: '2024-11-05' },
    { code: 'ur', name: 'Urdu', nativeName: 'اردو', script: 'Arabic', region: 'Asia', uiSupport: 'Full', courseContent: true, audioSupport: true, subtitles: true, screenReader: true, tts: true, captionsAccuracy: 'Native', lastUpdated: '2024-10-25' },
    { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', script: 'Other', region: 'Asia', uiSupport: 'Partial', courseContent: true, audioSupport: false, subtitles: true, screenReader: true, tts: false, captionsAccuracy: 'AI', lastUpdated: '2024-09-20' },
    { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', script: 'Other', region: 'Asia', uiSupport: 'Partial', courseContent: true, audioSupport: false, subtitles: true, screenReader: true, tts: false, captionsAccuracy: 'Reviewed', lastUpdated: '2024-08-15' },
    { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', script: 'Other', region: 'Asia', uiSupport: 'Partial', courseContent: true, audioSupport: false, subtitles: true, screenReader: true, tts: false, captionsAccuracy: 'Reviewed', lastUpdated: '2024-09-10' },
    { code: 'ko', name: 'Korean', nativeName: '한국어', script: 'Han', region: 'Asia', uiSupport: 'Full', courseContent: true, audioSupport: true, subtitles: true, screenReader: true, tts: true, captionsAccuracy: 'Native', lastUpdated: '2024-11-30' },
    { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', script: 'Latin', region: 'Asia', uiSupport: 'Full', courseContent: true, audioSupport: true, subtitles: true, screenReader: true, tts: true, captionsAccuracy: 'Native', lastUpdated: '2024-10-15' },
    { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', script: 'Latin', region: 'Middle East', uiSupport: 'Full', courseContent: true, audioSupport: true, subtitles: true, screenReader: true, tts: true, captionsAccuracy: 'Native', lastUpdated: '2024-11-05' },
    { code: 'it', name: 'Italian', nativeName: 'Italiano', script: 'Latin', region: 'Europe', uiSupport: 'Full', courseContent: true, audioSupport: true, subtitles: true, screenReader: true, tts: true, captionsAccuracy: 'Native', lastUpdated: '2024-10-30' },
    { code: 'th', name: 'Thai', nativeName: 'ไทย', script: 'Other', region: 'Asia', uiSupport: 'Partial', courseContent: true, audioSupport: true, subtitles: true, screenReader: true, tts: true, captionsAccuracy: 'Reviewed', lastUpdated: '2024-09-25' },
    { code: 'pl', name: 'Polish', nativeName: 'Polski', script: 'Latin', region: 'Europe', uiSupport: 'Full', courseContent: true, audioSupport: true, subtitles: true, screenReader: true, tts: true, captionsAccuracy: 'Native', lastUpdated: '2024-11-12' },
    { code: 'uk', name: 'Ukrainian', nativeName: 'Українська', script: 'Cyrillic', region: 'Europe', uiSupport: 'Full', courseContent: true, audioSupport: true, subtitles: true, screenReader: true, tts: true, captionsAccuracy: 'Native', lastUpdated: '2024-12-05' },
    { code: 'nl', name: 'Dutch', nativeName: 'Nederlands', script: 'Latin', region: 'Europe', uiSupport: 'Full', courseContent: true, audioSupport: true, subtitles: true, screenReader: true, tts: true, captionsAccuracy: 'Native', lastUpdated: '2024-10-18' },
    { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', script: 'Latin', region: 'Asia', uiSupport: 'Full', courseContent: true, audioSupport: true, subtitles: true, screenReader: true, tts: true, captionsAccuracy: 'Native', lastUpdated: '2024-11-08' },
    { code: 'ms', name: 'Malay', nativeName: 'Bahasa Melayu', script: 'Latin', region: 'Asia', uiSupport: 'Full', courseContent: true, audioSupport: true, subtitles: true, screenReader: true, tts: true, captionsAccuracy: 'Native', lastUpdated: '2024-10-22' },
    { code: 'fa', name: 'Persian', nativeName: 'فارسی', script: 'Arabic', region: 'Middle East', uiSupport: 'Partial', courseContent: true, audioSupport: true, subtitles: true, screenReader: true, tts: true, captionsAccuracy: 'Reviewed', lastUpdated: '2024-09-18' },
    { code: 'sw', name: 'Swahili', nativeName: 'Kiswahili', script: 'Latin', region: 'Africa', uiSupport: 'Beta', courseContent: true, audioSupport: false, subtitles: true, screenReader: false, tts: false, captionsAccuracy: 'AI', lastUpdated: '2024-08-05' },
    { code: 'am', name: 'Amharic', nativeName: 'አማርኛ', script: 'Other', region: 'Africa', uiSupport: 'Beta', courseContent: true, audioSupport: false, subtitles: false, screenReader: false, tts: false, captionsAccuracy: 'AI', lastUpdated: '2024-07-20' },
    { code: 'yo', name: 'Yoruba', nativeName: 'Yorùbá', script: 'Latin', region: 'Africa', uiSupport: 'Beta', courseContent: true, audioSupport: false, subtitles: false, screenReader: false, tts: false, captionsAccuracy: 'AI', lastUpdated: '2024-08-10' },
    { code: 'zu', name: 'Zulu', nativeName: 'isiZulu', script: 'Latin', region: 'Africa', uiSupport: 'Beta', courseContent: true, audioSupport: false, subtitles: true, screenReader: false, tts: false, captionsAccuracy: 'AI', lastUpdated: '2024-08-25' },
    { code: 'ha', name: 'Hausa', nativeName: 'Hausa', script: 'Latin', region: 'Africa', uiSupport: 'Beta', courseContent: true, audioSupport: false, subtitles: false, screenReader: false, tts: false, captionsAccuracy: 'AI', lastUpdated: '2024-07-30' },
    { code: 'fil', name: 'Filipino', nativeName: 'Filipino', script: 'Latin', region: 'Asia', uiSupport: 'Beta', courseContent: true, audioSupport: false, subtitles: true, screenReader: true, tts: false, captionsAccuracy: 'AI', lastUpdated: '2024-09-05' },
    { code: 'he', name: 'Hebrew', nativeName: 'עברית', script: 'Other', region: 'Middle East', uiSupport: 'Full', courseContent: true, audioSupport: true, subtitles: true, screenReader: true, tts: true, captionsAccuracy: 'Native', lastUpdated: '2024-11-18' },
    { code: 'sv', name: 'Swedish', nativeName: 'Svenska', script: 'Latin', region: 'Europe', uiSupport: 'Full', courseContent: true, audioSupport: true, subtitles: true, screenReader: true, tts: true, captionsAccuracy: 'Native', lastUpdated: '2024-10-28' },
    { code: 'no', name: 'Norwegian', nativeName: 'Norsk', script: 'Latin', region: 'Europe', uiSupport: 'Full', courseContent: true, audioSupport: true, subtitles: true, screenReader: true, tts: true, captionsAccuracy: 'Native', lastUpdated: '2024-10-15' },
    { code: 'da', name: 'Danish', nativeName: 'Dansk', script: 'Latin', region: 'Europe', uiSupport: 'Full', courseContent: true, audioSupport: true, subtitles: true, screenReader: true, tts: true, captionsAccuracy: 'Native', lastUpdated: '2024-10-10' },
    { code: 'fi', name: 'Finnish', nativeName: 'Suomi', script: 'Latin', region: 'Europe', uiSupport: 'Full', courseContent: true, audioSupport: true, subtitles: true, screenReader: true, tts: true, captionsAccuracy: 'Native', lastUpdated: '2024-11-02' },
    { code: 'el', name: 'Greek', nativeName: 'Ελληνικά', script: 'Other', region: 'Europe', uiSupport: 'Full', courseContent: true, audioSupport: true, subtitles: true, screenReader: true, tts: true, captionsAccuracy: 'Native', lastUpdated: '2024-10-08' },
    { code: 'cs', name: 'Czech', nativeName: 'Čeština', script: 'Latin', region: 'Europe', uiSupport: 'Partial', courseContent: true, audioSupport: true, subtitles: true, screenReader: true, tts: true, captionsAccuracy: 'Reviewed', lastUpdated: '2024-09-12' },
    { code: 'hu', name: 'Hungarian', nativeName: 'Magyar', script: 'Latin', region: 'Europe', uiSupport: 'Partial', courseContent: true, audioSupport: true, subtitles: true, screenReader: true, tts: true, captionsAccuracy: 'Reviewed', lastUpdated: '2024-09-28' },
    { code: 'ro', name: 'Romanian', nativeName: 'Română', script: 'Latin', region: 'Europe', uiSupport: 'Partial', courseContent: true, audioSupport: true, subtitles: true, screenReader: true, tts: true, captionsAccuracy: 'Reviewed', lastUpdated: '2024-09-22' },
    { code: 'ca', name: 'Catalan', nativeName: 'Català', script: 'Latin', region: 'Europe', uiSupport: 'Beta', courseContent: true, audioSupport: false, subtitles: true, screenReader: true, tts: false, captionsAccuracy: 'AI', lastUpdated: '2024-08-18' },
    { code: 'ka', name: 'Georgian', nativeName: 'ქართული', script: 'Other', region: 'Europe', uiSupport: 'Beta', courseContent: true, audioSupport: false, subtitles: false, screenReader: false, tts: false, captionsAccuracy: 'AI', lastUpdated: '2024-07-25' },
    { code: 'hy', name: 'Armenian', nativeName: 'Հայերեն', script: 'Other', region: 'Asia', uiSupport: 'Beta', courseContent: true, audioSupport: false, subtitles: false, screenReader: false, tts: false, captionsAccuracy: 'AI', lastUpdated: '2024-07-28' },
    { code: 'km', name: 'Khmer', nativeName: 'ខ្មែរ', script: 'Other', region: 'Asia', uiSupport: 'Beta', courseContent: true, audioSupport: false, subtitles: false, screenReader: false, tts: false, captionsAccuracy: 'AI', lastUpdated: '2024-08-02' },
    { code: 'lo', name: 'Lao', nativeName: 'ລາວ', script: 'Other', region: 'Asia', uiSupport: 'Beta', courseContent: true, audioSupport: false, subtitles: false, screenReader: false, tts: false, captionsAccuracy: 'AI', lastUpdated: '2024-08-08' },
    { code: 'my', name: 'Burmese', nativeName: 'မြန်မာစာ', script: 'Other', region: 'Asia', uiSupport: 'Beta', courseContent: true, audioSupport: false, subtitles: false, screenReader: false, tts: false, captionsAccuracy: 'AI', lastUpdated: '2024-08-12' },
];
