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

        BarChart barChart = new BarChart();
        getContentPane().add(barChart, BorderLayout.CENTER);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            FrmMain mf = new FrmMain();
            mf.setVisible(true);
        });

    }
}
