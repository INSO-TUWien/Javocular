package org.example;

import javax.swing.*;

import org.jfree.chart.ChartFactory;
import org.jfree.chart.ChartPanel;
import org.jfree.chart.JFreeChart;
import org.jfree.chart.plot.CategoryPlot;
import org.jfree.chart.plot.PlotOrientation;
import org.jfree.chart.renderer.category.CategoryItemRenderer;
import org.jfree.chart.renderer.category.StackedBarRenderer;
import org.jfree.chart.renderer.category.StandardBarPainter;
import org.jfree.data.category.DefaultCategoryDataset;
import java.awt.*;
public class BarChart extends JPanel{
    public BarChart() {
        // Create a dataset for the bar chart
        DefaultCategoryDataset dataset = new DefaultCategoryDataset();

        // Add sample data to the dataset
        dataset.addValue(1.0, "Merge Requests", "Autor 1");
        dataset.addValue(2.0, "Issues", "Autor 1");
        dataset.addValue(3.0, "Commits", "Autor 1");
        dataset.addValue(2.0, "Issues", "Autor 2");
        dataset.addValue(3.0, "Commits", "Autor 3");

        // Create the bar chart
        JFreeChart chart = ChartFactory.createStackedBarChart(
                "CIMR - Diagramm",
                "Autoren",
                "Anzahl",
                dataset,
                PlotOrientation.HORIZONTAL,
                true,
                true,
                false
        );

        // Customize the chart if needed
        CategoryPlot plot = chart.getCategoryPlot();
        StackedBarRenderer renderer = new StackedBarRenderer();
        plot.setRenderer(renderer);
        renderer.setBarPainter(new StandardBarPainter());

        // Create a ChartPanel for the chart and add it to this panel
        ChartPanel chartPanel = new ChartPanel(chart);
        this.add(chartPanel);
    }
}
