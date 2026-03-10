package utilities;

import java.io.FileInputStream;
import java.util.Properties;

public class PropertiesUtilities {

    private static Properties properties;

    static {
        try {
            FileInputStream fis = new FileInputStream("Configurations.properties");
            properties = new Properties();
            properties.load(fis);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static String getProperty(String key) {
        return properties.getProperty(key);
    }

}
