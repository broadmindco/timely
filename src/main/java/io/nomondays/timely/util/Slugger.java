package io.nomondays.timely.util;

import com.github.slugify.Slugify;

public class Slugger {

    public static String getSlug(String text) {
        return new Slugify().slugify(text);
    }

}
