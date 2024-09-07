document.addEventListener("DOMContentLoaded", function () {
  //Part of the code that was modified:
  const reports = [
    {
      id: "infographics",
      embedUrl: "Embed URL infographics",
      reportId: "report ID infographics",
      filters: {
        table: "trauma_and_illness",
        column: "Area_Name",
        operator: "In",
        values: ["Cairns"],
      },
      pageName: "ReportSection515fed1a714dd033d8fc",
      width: "95%",
      height: "500px",
    },
    {
      id: "emergency_arrivals",
      embedUrl: "Embed URL emergency",
      reportId: "report ID emergency",
      filters: {
        table: "trauma_and_illness",
        column: "Area_Name",
        operator: "In",
        values: ["Cairns"],
      },
      pageName: "ReportSection6a0e088162900779258a",
      width: "95%",
      height: "500px",
    },
    {
      id: "embed-act-3",
      embedUrl: "Embed URL act",
      reportId: "report ID act",
      filters: {
        table: "trauma_and_illness",
        column: "Area_Name",
        operator: "In",
        values: ["Cairns"],
      },
      pageName: "ReportSectionf1275970dc4746687583",
      width: "95%",
      height: "500px",
    },
    {
      id: "amb-post",
      embedUrl: "Embed URL post",
      reportId: "report ID post",
      filters: {
        table: "trauma_and_illness",
        column: "Area_Name",
        operator: "In",
        values: ["Cairns"],
      },
      pageName: "ReportSection264b1c3ea9a250c070f6",
      width: "95%",
      height: "500px",
    },
    {
      id: "amb-lost",
      embedUrl: "Embed URL lost",
      reportId: "report ID lost",
      filters: {
        table: "trauma_and_illness",
        column: "Area_Name",
        operator: "In",
        values: ["Cairns"],
      },
      pageName: "ReportSectionfac049a73062d9355725",
      width: "95%",
      height: "500px",
    },
    {
      id: "time_to_be_seen",
      embedUrl: "Embed URL seen",
      reportId: "report ID seen",
      filters: {
        table: "trauma_and_illness",
        column: "Area_Name",
        operator: "In",
        values: ["Cairns"],
      },
      pageName: "ReportSection4a75af43deac1427aec9",
      width: "95%",
      height: "500px",
    },
    {
      id: "unexpected_departures",
      embedUrl: "Embed URL departure",
      reportId: "report ID departure",
      filters: {
        table: "trauma_and_illness",
        column: "Area_Name",
        operator: "In",
        values: ["Cairns"],
      },
      pageName: "ReportSection2233f54d7c643fcd42b5",
      width: "95%",
      height: "500px",
    },
    {
      id: "elos_for_care_completion",
      embedUrl: "Embed Url completion",
      reportId: "report ID completion",
      filters: {
        table: "trauma_and_illness",
        column: "Area_Name",
        operator: "In",
        values: ["Cairns"],
      },
      pageName: "ReportSection5ffeb6464262fb7baa44",
      width: "95%",
      height: "500px",
    },
    {
      id: "admissions_from_ed",
      embedUrl: "Embed Url admission",
      reportId: "report ID admission",
      filters: {
        table: "trauma_and_illness",
        column: "Area_Name",
        operator: "In",
        values: ["Cairns"],
      },
      pageName: "ReportSectiondb747d0a12dff8818510",
      width: "95%",
      height: "500px",
    },
  ];

  // Embed all reports
  reports.forEach((report) => {
    setupObserver(
      report.id,
      report.embedUrl,
      report.reportId,
      report.filters,
      report.pageName,
      report.width,
      report.height
    );
  });
});
