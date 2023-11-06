package org.reader;

public class TempMain {
    public static void main(String[] args) {
        Reader r = Reader.CreateReader(ReaderType.Database, "binocular-Binocular");
        r.QueryResult("FOR t IN commits RETURN t").forEach(n -> System.out.println(n.getAttribute("signature")));
    }
}
