package org.example;

import javax.swing.*;

import org.jfree.chart.ChartFactory;
import org.jfree.chart.ChartPanel;
import org.jfree.chart.JFreeChart;
import org.jfree.chart.plot.PlotOrientation;
import org.jfree.data.category.DefaultCategoryDataset;
import java.awt.*;

public class FrmMain extends JFrame {

    public FrmMain() {
        super("Javocular GUI");
        setSize(500, 400);
        setMinimumSize(new Dimension(500, 400));
        setDefaultCloseOperation(EXIT_ON_CLOSE);

        // Create a dataset for the bar chart
        DefaultCategoryDataset dataset = new DefaultCategoryDataset();

        // Add sample data to the dataset
        dataset.addValue(1.0, "Category 1", "Data 1");
        dataset.addValue(2.0, "Category 1", "Data 2");
        dataset.addValue(3.0, "Category 1", "Data 3");

        // Create the bar chart
        JFreeChart chart = ChartFactory.createBarChart(
                "Sample Bar Chart",
                "Category",
                "Value",
                dataset,
                PlotOrientation.HORIZONTAL,
                true,
                true,
                false
        );

        // Create a chart panel and add it to the frame
        ChartPanel chartPanel = new ChartPanel(chart);
        getContentPane().add(chartPanel, BorderLayout.CENTER);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            FrmMain mf = new FrmMain();
            mf.setVisible(true);
        });

    }
}
