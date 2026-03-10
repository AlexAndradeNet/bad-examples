package cucumberRunner;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/features",
        glue = "stepDefinitions",
        plugin = {
                "html:target/cucumber-reports.html",
                "json:target/cucumber.json"
        },
        tags = "@bf01",
        dryRun = false
)
public class RunnerTests {

}
