import {
    DisplayProcessor,
    SpecReporter,
    StacktraceOption,
  } from "jasmine-spec-reporter";
  import SuiteInfo = jasmine.SuiteInfo;
  

  
  jasmine.getEnv().clearReporters();
  jasmine.getEnv().addReporter(
    new SpecReporter({
      spec: {
        displayStacktrace: StacktraceOption.NONE,
      },
    }),
  );