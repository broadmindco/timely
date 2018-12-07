package com.runway.timely.util;

public class Guard {

    /**
     * The guard is used to fail early when a parameter is missing
     * This throws a custom exception, which resolves in a http context
     * to a 400 Bad Request. Take a look at the "RestExceptionHandler"
     *
     * @author  nhh
     * @since   1.0
     */
    public static <T> T requireNonNull(T obj, String message) {
        if (obj == null) {
            throw new IllegalArgumentException(message);
        }
        return obj;
    }

    private Guard() {
        // Only access public method
    }

}
