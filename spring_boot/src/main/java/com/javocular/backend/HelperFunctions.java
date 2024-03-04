package com.javocular.backend;

public class HelperFunctions {

    public static String stripEmail(String value) {
        if(!value.substring(0, value.indexOf("<")).isEmpty())
            return value.substring(0, value.indexOf("<") - 1);
        return value;
    }


    public static String replaceUmlauts(String input) {

        if(input == null) return null;


        // replace all lower Umlauts
        String output = input.replace("ü", "ue")
                             .replace("ö", "oe")
                             .replace("ä", "ae")
                             .replace("ß", "ss");

        // first replace all capital Umlauts in a non-capitalized context (e.g. Übung)
        output = output.replaceAll("Ü(?=[a-zäöüß ])", "Ue")
                       .replaceAll("Ö(?=[a-zäöüß ])", "Oe")
                       .replaceAll("Ä(?=[a-zäöüß ])", "Ae");

        // now replace all the other capital Umlauts
        output = output.replace("Ü", "UE")
                       .replace("Ö", "OE")
                       .replace("Ä", "AE");

        return output;
    }
}